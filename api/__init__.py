from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def create_app():

    # Init app
    app = Flask(__name__)

    # Database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///sconehungus.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from .views import api
    app.register_blueprint(api)

    return app
