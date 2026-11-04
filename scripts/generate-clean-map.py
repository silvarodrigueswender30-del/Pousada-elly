import math
import os
import urllib.request
from PIL import Image, ImageEnhance

# Coordenadas do Canto do Iriri / Praia do Ubatumirim (onde fica a Pousada Eliiy Zita Pedro):
# A Praia do Ubatumirim fica na enseada protegida:
LAT_UBATUMIRIM = -23.3365
LON_UBATUMIRIM = -44.9055

ZOOM = 14

def lat_lon_to_tile_xy(lat_deg, lon_deg, zoom):
    lat_rad = math.radians(lat_deg)
    n = 2.0 ** zoom
    xtile = (lon_deg + 180.0) / 360.0 * n
    ytile = (1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n
    return xtile, ytile

target_x, target_y = lat_lon_to_tile_xy(LAT_UBATUMIRIM, LON_UBATUMIRIM, ZOOM)

WIDTH = 1600
HEIGHT = 1000

# O pino no desktop fica em left: 55%, top: 48%
pin_px_x = WIDTH * 0.55
pin_px_y = HEIGHT * 0.48

offset_tiles_x = pin_px_x / 256.0
offset_tiles_y = pin_px_y / 256.0

start_tile_x_float = target_x - offset_tiles_x
start_tile_y_float = target_y - offset_tiles_y

start_tile_x = int(math.floor(start_tile_x_float))
start_tile_y = int(math.floor(start_tile_y_float))

end_tile_x = int(math.ceil(start_tile_x_float + WIDTH / 256.0))
end_tile_y = int(math.ceil(start_tile_y_float + HEIGHT / 256.0))

tiles_cols = end_tile_x - start_tile_x
tiles_rows = end_tile_y - start_tile_y

canvas = Image.new("RGB", (tiles_cols * 256, tiles_rows * 256), (242, 239, 233))
headers = {"User-Agent": "Mozilla/5.0"}

for row_idx, ty in enumerate(range(start_tile_y, end_tile_y)):
    for col_idx, tx in enumerate(range(start_tile_x, end_tile_x)):
        url = f"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{ZOOM}/{ty}/{tx}"
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                from io import BytesIO
                t = Image.open(BytesIO(resp.read())).convert("RGB")
                canvas.paste(t, (col_idx * 256, row_idx * 256))
        except Exception as e:
            print(f"Error {tx},{ty}: {e}")

crop_x = int(round((start_tile_x_float - start_tile_x) * 256.0))
crop_y = int(round((start_tile_y_float - start_tile_y) * 256.0))

final_map = canvas.crop((crop_x, crop_y, crop_x + WIDTH, crop_y + HEIGHT))

enhancer = ImageEnhance.Color(final_map)
final_map = enhancer.enhance(0.92)

out_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "../site/public/media/editorial"))
webp_path = os.path.join(out_dir, "mapa-real-ubatumirim.webp")
png_path = os.path.join(out_dir, "mapa-real-ubatumirim.png")

final_map.save(webp_path, "WEBP", quality=90)
final_map.save(png_path, "PNG")
print(f"SUCCESS: Saved centered clean map to {webp_path}")
