from flask import Flask, request, jsonify
import imghdr
from ingest import eat
from privateGPT import privateQuery

app = Flask(__name__)

# Configure the upload folder where files will be stored
UPLOAD_FOLDER = '/home/kali/Desktop/CloudHacks-Team11/backend/privateGPT/source_documents'
ALLOWED_EXTENSIONS = {'csv', 'docx', 'doc', 'enex', 'eml', 'epub', 'html', 'md', 'msg', 'odt', 'pdf', 'pptx', 'ppt', 'txt'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Custom middleware to add response headers globally
@app.after_request
def add_response_headers(response):
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
    return response

# API Endpoint Agnostic Function
def allowed_file(filename):
    if filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS:
        return True

@app.route('/api/query', methods=['POST'])
def query():
    #if request.form:
    if request.get_json():
        json_payload = request.get_json()
        user_question = json_payload.get('query')
        #user_question = request.form.get('query', '')
        time_taken,answer,documents = privateQuery(user_question)
        llm_output = ""
        llm_output += "time taken: " + str(time_taken) + "s"
        llm_output += "================================================="
        llm_output += str(answer)
        llm_output += "================================================="
        for document in documents:
            llm_output += document[0]['source'] 
            llm_output += "================================================="
            llm_output += document[1]['content']
            llm_output += "================================================="

        return jsonify({'output':llm_output}),200

@app.route('/api/ingest', methods=['GET'])
def ingest():
    try:
        result = eat()
        return jsonify({'message': result}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/api/upload-file', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if allowed_file(file.filename):
        # Save the file to the upload folder
        file.save(app.config['UPLOAD_FOLDER']+"/"+file.filename)
        return jsonify({
            'message': 'File uploaded successfully',
            'filename': file.filename,
            'size': len(file.read())
        }), 200

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if imghdr.what(file):
        # Save the file to the upload folder
        file.save("/home/kali/Desktop/CloudHacks-Team11/Test/uploads/image/" + file.filename)
        return jsonify({
            'message': 'File uploaded successfully',
            'filename': file.filename,
            'size': len(file.read())
        }), 200
    else:
        return jsonify({'error': 'Invalid Filetype'}), 400

if __name__ == '__main__':
    app.run(debug=True)
