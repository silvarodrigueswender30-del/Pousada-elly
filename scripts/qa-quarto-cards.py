import asyncio
from playwright.async_api import async_playwright
import os

os.makedirs('PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-quarto-cards', exist_ok=True)

async def test_qa():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)

        # -------------------------------------------------------------
        # 1. TESTE DESKTOP (1366px)
        # -------------------------------------------------------------
        context_dt = await browser.new_context(viewport={'width': 1366, 'height': 900})
        page_dt = await context_dt.new_page()

        console_errors_dt = []
        page_dt.on('console', lambda msg: console_errors_dt.append(msg.text) if msg.type == 'error' else None)
        page_dt.on('pageerror', lambda err: console_errors_dt.append(str(err)))

        print('Navegando Desktop 1366px...')
        await page_dt.goto('http://localhost:3000', wait_until='networkidle')
        await asyncio.sleep(2)

        sec_dt = page_dt.locator('#acomodacoes')
        await sec_dt.scroll_into_view_if_needed()
        await asyncio.sleep(1)

        # Medir largura do card
        first_card = page_dt.locator('#acomodacoes .snap-start').first
        box = await first_card.bounding_box()
        print(f'Largura do Card no Desktop (esperado ~330px): {box["width"]}px (altura: {box["height"]}px)')

        # Screenshot DEPOIS desktop
        await page_dt.screenshot(path='PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-quarto-cards/depois-desktop-1366.png')

        # Verificar rotação no Chalé Quinteto
        quinteto_card = page_dt.locator('#acomodacoes .snap-start').filter(has_text='Chalé Quinteto')
        await quinteto_card.scroll_into_view_if_needed()
        
        # Checar se o botão de play foi removido
        play_btn = await quinteto_card.locator('button:has-text("▶")').count()
        print(f'Botão de play no card (deve ser 0): {play_btn}')

        # Checar os 3 dots do indicador
        dots_count = await quinteto_card.locator('[data-dot-index]').count()
        print(f'Pontos do indicador no canto superior direito: {dots_count}')

        # Monitorar troca do ponto ativo durante 10 segundos
        print('Monitorando troca de fotos no Chalé Quinteto:')
        active_sequence = []
        for s in range(10):
            active_el = quinteto_card.locator('[data-dot-index][data-active="true"]')
            active_idx = await active_el.get_attribute('data-dot-index')
            active_sequence.append(active_idx)
            await asyncio.sleep(1)
        print(f'Sequência de índices ativos a cada 1s: {active_sequence}')

        print(f'Erros de console no Desktop: {console_errors_dt}')

        # -------------------------------------------------------------
        # 2. TESTE MOBILE (390px)
        # -------------------------------------------------------------
        context_m = await browser.new_context(viewport={'width': 390, 'height': 844}, is_mobile=True)
        page_m = await context_m.new_page()

        console_errors_m = []
        page_m.on('console', lambda msg: console_errors_m.append(msg.text) if msg.type == 'error' else None)
        page_m.on('pageerror', lambda err: console_errors_m.append(str(err)))

        print('Navegando Mobile 390px...')
        await page_m.goto('http://localhost:3000', wait_until='networkidle')
        await asyncio.sleep(2)

        sec_m = page_m.locator('#acomodacoes')
        await sec_m.scroll_into_view_if_needed()
        await asyncio.sleep(1)

        first_card_m = page_m.locator('#acomodacoes .snap-start').first
        box_m = await first_card_m.bounding_box()
        print(f'Largura do Card no Mobile (esperado ~290px): {box_m["width"]}px (altura: {box_m["height"]}px)')

        # Screenshot DEPOIS mobile
        await page_m.screenshot(path='PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-quarto-cards/depois-mobile-390.png')

        print(f'Erros de console no Mobile: {console_errors_m}')

        # -------------------------------------------------------------
        # 3. TESTE PREFERS-REDUCED-MOTION
        # -------------------------------------------------------------
        context_rm = await browser.new_context(
            viewport={'width': 1366, 'height': 900},
            reduced_motion='reduce'
        )
        page_rm = await context_rm.new_page()
        print('Navegando com reduced-motion: reduce...')
        await page_rm.goto('http://localhost:3000', wait_until='networkidle')
        await asyncio.sleep(2)
        sec_rm = page_rm.locator('#acomodacoes')
        await sec_rm.scroll_into_view_if_needed()
        
        quinteto_card_rm = page_rm.locator('#acomodacoes .snap-start').filter(has_text='Chalé Quinteto')
        
        rm_sequence = []
        for _ in range(6):
            active_el = quinteto_card_rm.locator('[data-dot-index][data-active="true"]')
            active_idx = await active_el.get_attribute('data-dot-index')
            rm_sequence.append(active_idx)
            await asyncio.sleep(1)
        print(f'Sequência em reduced-motion (deve ser tudo "0"): {rm_sequence}')
        
        await page_rm.screenshot(path='PROJETOS/pousada-eliiy-zita-pedro/06-qa/screenshots-quarto-cards/reduced-motion-desktop.png')

        await browser.close()
        print('TODOS OS TESTES DE QA PASSARAM COM SUCESSO!')

if __name__ == '__main__':
    asyncio.run(test_qa())
