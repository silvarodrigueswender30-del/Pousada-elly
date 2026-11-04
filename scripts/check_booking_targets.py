import os
from PIL import Image

booking_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img'
targets = ['651581186.jpg', '651617454.jpg', '651617456.jpg', '651617460.jpg', '651709666.jpg', '651709670.jpg', '651727456.jpg']

for t in targets:
    p = os.path.join(booking_dir, t)
    im = Image.open(p)
    print(t, im.size)
