from flask import Blueprint

api = Blueprint('api',__name__,url_prefix='/api_v1',template_folder='templates')

from . import routes
