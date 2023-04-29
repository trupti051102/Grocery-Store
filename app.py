from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    products = ["Vegetables", "Fruits", "Spices"]
    return render_template("index.html", products=products)

if __name__ == "__main__":
    app.run()
