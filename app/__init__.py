from flask import Flask
from flask_socketio import SocketIO
from .main import main

socketio = SocketIO()

def create_app(debug=False):
    
   app = Flask(__name__)
   app.debug = debug 
   app.config['SECRET_KEY'] = '1A37BbcCJh67'
   socketio.init_app(app,async_mode=None, logger=True, engineio_logger=True)
   
   
   
   app.register_blueprint(main)
   return app