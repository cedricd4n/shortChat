from flask import Blueprint,render_template,flash,request,redirect,url_for,session,jsonify,abort
from . import api
from .. import socketio


@api.route("/greeting")
def greeting():
    
    data = [1,2,3,4,5,6,7,8]
    
    return {"greeting": data}
