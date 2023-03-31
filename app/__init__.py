from flask import Flask
from flask_socketio import SocketIO


socketio = SocketIO()

def app(debug=False):
    
   app = Flask(__name__)
   
   

  
   app.config['SECRET_KEY'] = '1A37BbcCJh67'
   socketio.init_app(app,async_mode=None, logger=True, engineio_logger=True)
   
   from .main import main
   app.register_blueprint(main)

   
   from .api import api
   app.register_blueprint(api)
   return app
