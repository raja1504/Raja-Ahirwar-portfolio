from flask import Flask
from flask import *
import os
app = Flask(__name__, static_folder='./static', template_folder='./templates')
# app.config['HOST'] = os.getenv("FLASK_HOST", "192.168.203.186")
# app.config['PORT'] = int(os.getenv("FLASK_PORT", 5000))
@app.route('/')
def main():
    return render_template("home.html")
@app.route('/about')
def about():
    return render_template("about-us.html")
@app.route('/services')
def services():
    return render_template("services.html")
@app.route('/projects')
def project():
    return render_template("projects.html")
@app.route('/experience')
def experience():
    return render_template("experience.html")
@app.route('/education')
def portfolio():
    return render_template("education.html")
@app.route('/contect')
def contect():
    return render_template("contect-us.html")
# if __name__ == '__main__':
#     app.run(debug=True)
# if __name__ == '__main__':
#     app.run(host=app.config['HOST'],port=app.config['PORT'], threaded=True, debug=True)