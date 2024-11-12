FROM python:3.8.7-slim-buster
 
WORKDIR /app
 
COPY requirements.txt .
 
RUN pip install -r requirements.txt
 
ADD . .
 
EXPOSE 5000
 
CMD flask run --host=0.0.0.0