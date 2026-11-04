import os
import subprocess
import json

sessao_dir = 'PROJETOS/pousada-eliiy-zita-pedro/02-referencias/videos-img/img-video-sessao'

for f in sorted(os.listdir(sessao_dir)):
    if f.lower().endswith(('.mp4', '.mov')):
        p = os.path.join(sessao_dir, f)
        cmd = [
            'ffprobe', '-v', 'quiet', '-print_format', 'json',
            '-show_streams', '-show_format', p
        ]
        out = subprocess.check_output(cmd)
        data = json.loads(out)
        video_s = [s for s in data['streams'] if s['codec_type'] == 'video'][0]
        dur = float(data['format'].get('duration', 0))
        w = video_s['width']
        h = video_s['height']
        print(f"{f:35s}: {w}x{h}, dur={dur:.1f}s")
