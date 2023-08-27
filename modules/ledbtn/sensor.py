import time
from rpi_ws281x import PixelStrip,Color
from grove import grove_light_sensor_v1_2
import json

count = 29
pin = 10
freq_hz = 800000
dma = 10
brightness = 255
invert = False
channel = 0

file_name = './modules/ledbtn/config.json'
with open(file_name, 'r') as f:
	data = json.load(f)
def brightness_get():
	grove_light_sensor_v1_2.GroveLightSensor(0)
	sensor = grove_light_sensor_v1_2.GroveLightSensor(0)
	a = 255-int(int(sensor.light/620*10)*25.5)
	
	return a
def light_control():
	Brightness = brightness_get()
	strip.setBrightness(Brightness)
	strip.show()
	return Brightness
def colorWipe(strip,color):
	for i in range(strip.numPixels()):
		strip.setPixelColor(i,color)
		strip.show()
if __name__ == '__main__':
	strip = PixelStrip(count,pin,freq_hz,dma,invert,data["brightness"],channel)
	strip.begin()
	while data["sensor"]:
		colorWipe(strip,Color(data["R"],data["G"],data["B"]))
		with open(file_name, 'r') as f:
			data = json.load(f)
		data["brightness"] = light_control()
		with open(file_name, 'w') as f:
			json.dump(data,f,ensure_ascii=False)
		time.sleep(1)
