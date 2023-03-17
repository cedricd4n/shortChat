from flask import Flask, render_template
from flask_socketio import SocketIO

application = Flask(__name__)
application.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(application)


@application.route('/')
def sessions():
    return render_template('session.html')


def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=messageReceived)


if __name__ == '__main__':
    socketio.run(application, debug=True)
