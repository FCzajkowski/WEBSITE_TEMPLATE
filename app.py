from Hajime import * 

app = Hajime()

@app.route("/")
def home(environ):
    return app.template("index.html")

ports = [8800, 8801]
app.launch(ports[0], ports[1])