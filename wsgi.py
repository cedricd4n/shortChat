from app import app,socketio

app = app(debug=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)