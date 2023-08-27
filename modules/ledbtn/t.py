import json
file_name = '/home/alex-li/MagicMirror/modules/ledbtn/config.json'
with open(file_name, 'r') as f:
	data = json.load(f)
data["brightness"] = 255
with open(file_name, 'w') as f:
	json.dump(data,f,ensure_ascii=False)
