import math

# Em z14, tínhamos ix=6147, iy=9285
# "Ubatumirim" estava no tile da direita e acima ou no mesmo nível:
# col=2 (ix+1 = 6148), row=0 (iy-1 = 9284)

def num2deg(xtile, ytile, zoom):
    n = 2.0 ** zoom
    lon_deg = xtile / n * 360.0 - 180.0
    lat_rad = math.atan(math.sinh(math.pi * (1 - 2 * ytile / n)))
    lat_deg = math.degrees(lat_rad)
    return lat_deg, lon_deg

print("Tile (6148, 9284) coords:", num2deg(6148, 9284, 14))
print("Tile (6148, 9285) coords:", num2deg(6148, 9285, 14))
