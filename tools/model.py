import os

def meta():
    return {
        "description": "Specify llm model and temperature.",
        "params": {
            "model": {
                "type": "string",
                "description": "gpt-4o or gpt-4o-mini."
            },
            "temperature": {
                "type": "integer",
                "description": "0 to 100"
            }
        }
    }

def run(args, thread):
    if "model" in args:
        thread["model"] = args.get("model")
    if "temperature" in args:
        thread["temperature"] = args["temperature"] / 100
    return "success"
