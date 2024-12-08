case "$1" in
    up)
        sudo docker run -p 8123:8123 -v `pwd`:/root -w /root bot:latest uvicorn serve:app --host 0.0.0.0 --port 8123 --reload
        ;;
    run)
        sudo docker run -v `pwd`:/root -w /root bot:latest python3 chat.py
        ;;
esac
