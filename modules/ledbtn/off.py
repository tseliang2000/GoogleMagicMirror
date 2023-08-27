from rpi_ws281x import PixelStrip,Color
import json

count = 29
pin = 10
freq_hz = 800000
dma = 10
brightness = 255
invert = False
channel = 0

def colorWipe(strip,color):
	for i in range(strip.numPixels()):
		strip.setPixelColor(i,color)
		strip.show()
if __name__ == '__main__':
	strip = PixelStrip(count,pin,freq_hz,dma,invert,brightness,channel)
	strip.begin()
	colorWipe(strip,Color(0,0,0))
	file_name = './modules/ledbtn/config.json'
	with open(file_name, 'r') as f:
		data = json.load(f)
	data["sensor"] = 0
	with open(file_name, 'w') as f:
		json.dump(data,f,ensure_ascii=False)
