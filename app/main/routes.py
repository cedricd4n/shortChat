from flask import Blueprint,render_template,flash,request,redirect,url_for,session,jsonify,abort
from . import main
from .. import socketio


@main.route('/')
def sessions():
    return render_template('main/session.html')


def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    socketio.emit('my response', json, callback=messageReceived)

