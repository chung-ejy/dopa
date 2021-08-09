from django.shortcuts import render
from django.http.response import JsonResponse
import pickle
import pandas as pd
import json
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime, timedelta
import requests
from pymongo import MongoClient
@csrf_exempt
def backendView(request):
    info = json.loads(request.body.decode("utf-8"))
    factors = ["FirstBlood","FirstTower","FirstBaron","FirstDragon","FirstInhibitor"]
    try:
        info["side"] = 1 if info["side"] else 0
        info["tier"] = "gm" if info["side"] else "m"
        client = MongoClient("localhost",27017)
        db = client["dopa"]
        table = db["models"]
        data = table.find(show_record_id=False)
        models =  pd.DataFrame(list(data))
        model = models[(models["tier"]==info["tier"]) & (models["side"]==info["side"])]
        m = pickle.loads(model["model"].item())
        complete = info
        plz = {} 
        for factor in factors:
            plz[factor] = info[factor]
        complete["prediction"] = int(m.predict(pd.DataFrame([plz])))
        print(complete)
    except Exception as e:
        complete = info
        complete["prediction"] = "not found"
        print(str(e))
    return JsonResponse(complete,safe=False)