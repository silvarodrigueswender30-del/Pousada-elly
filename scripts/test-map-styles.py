import urllib.request
import os
from PIL import Image

# Coordenadas:
LAT = -23.3486585
LON = -44.928734

import math

def lat_lon_to_tile(lat, lon, zoom):
    lat_r = math.radians(lat)
    n = 2.0 ** zoom
    x = (lon + 180.0) / 360.0 * n
    y = (1.0 - math.asinh(math.tan(lat_r)) / math.pi) / 2.0 * n
    return x, y

headers = {"User-Agent": "Mozilla/5.0"}

for zoom in [14, 15]:
    tx, ty = lat_lon_to_tile(LAT, LON, zoom)
    print(f"Zoom {zoom}: x={tx:.2f}, y={ty:.2f}")
    
    # Baixar 3x3 tiles ao redor do centro do OSM e Esri
    ix, iy = int(tx), int(ty)
    
    # Esri
    canvas_esri = Image.new("RGB", (3*256, 3*256))
    for r, cy in enumerate(range(iy-1, iy+2)):
        for c, cx in enumerate(range(ix-1, ix+2)):
            url = f"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{zoom}/{cy}/{cx}"
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req) as resp:
                    from io import BytesIO
                    t = Image.open(BytesIO(resp.read())).convert("RGB")
                    canvas_esri.paste(t, (c*256, r*256))
            except Exception as e:
                print(e)
    canvas_esri.save(f"map_test_esri_z{zoom}.jpg")

    # OSM
    canvas_osm = Image.new("RGB", (3*256, 3*256))
    for r, cy in enumerate(range(iy-1, iy+2)):
        for c, cx in enumerate(range(ix-1, ix+2)):
            url = f"https://tile.openstreetmap.org/{zoom}/{cy}/{cx}.png"
            try:
                req = urllib.request.Request(url, headers=headers)
                with urllib.request.urlopen(req) as resp:
                    from io import BytesIO
                    t = Image.open(BytesIO(resp.read())).convert("RGB")
                    canvas_osm.paste(t, (c*256, r*256))
            except Exception as e:
                print(e)
    canvas_osm.save(f"map_test_osm_z{zoom}.jpg")

print("Done generating test maps.")
