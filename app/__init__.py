from flask import Flask
from flask_socketio import SocketIO


socketio = SocketIO()

def create_app():
    
   app = Flask(__name__)
   app.debug = debug 
   app.config['SECRET_KEY'] = '1A37BbcCJh67'
   socketio.init_app(app,async_mode=None, logger=True, engineio_logger=True)
   
   
   from .main import main
   app.register_blueprint(main)
   return app
