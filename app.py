from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/chapter01")
def chapter01():
    return render_template("chapter01.html")


@app.route("/chapter02")
def chapter02():
    return render_template("chapter02.html")


@app.route("/chapter03")
def chapter03():
    return render_template("chapter03.html")


if __name__ == "__main__":
    app.run(debug=True)
