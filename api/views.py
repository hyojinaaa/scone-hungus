from flask import Blueprint, jsonify, request
from . import db
from .models import Scone

api = Blueprint('api', __name__)


@api.route('/add_scone', methods=['POST'])
def add_scone():
    scone_data = request.get_json()

    new_scone = Scone()

    return 'Done', 201


@api.route('/list_scones')
def list_scones():

    scones = []

    return jsonify({'scones': scones})
