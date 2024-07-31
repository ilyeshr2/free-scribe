# FreeScribe

FreeScribe is a web application designed for recording audio, transcribing it into text, and translating the text into various languages. The application uses Whisper a pre-trained model for automatic speech recognition (ASR) and speech translation. Trained on 680k hours of labelled data to offer these features efficiently.

## Features

- **Audio Recording**: Record audio directly from your microphone with user-friendly controls.
- **Transcription**: Convert recorded or uploaded audio into text using Automatic Speech Recognition (ASR) models.
- **Translation**: Translate the transcribed text into various languages using translation models.

## Technologies Used

- **React**: For building the user interface.
- **JavaScript/TypeScript**: For client-side scripting and application logic.
- **Web Workers**: To handle background tasks such as transcription and translation.
- **Xenova Transformers**: For accessing pre-trained ASR and translation models.

## Components

- **HomePage**: Main interface for recording or uploading audio files.
- **Header**: Provides navigation and additional functionality.
- **FileDisplay**: Displays the uploaded or recorded audio file and provides playback and action buttons.

## Web Workers

- **Transcription Worker**: Transcribes audio data into text using ASR models.
- **Translation Worker**: Translates text data into a target language using translation models.

## API Endpoints

- **POST /transcribe**
  - **Description**: Submits audio for transcription.
  - **Request Body**: Audio file.
  - **Response**: Transcribed text.

- **POST /translate**
  - **Description**: Submits text for translation.
  - **Request Body**: Text, target language, source language.
  - **Response**: Translated text.

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ilyeshr2/free-scribe
   cd freescribe
2. **Install dependencies**
   ```bash
   npm install
3. **Run The Application**
   ```bash
   npm run dev

## Usage
-**Open the Application**: Navigate to http://localhost:xxxx in your web browser.
-**Record or Upload Audio**: Use the controls on the HomePage to record audio or upload a file.
-**Transcribe Audio**: After recording or uploading, the audio will be automatically transcribed.
-**Translate Text**: Once transcription is complete, select the target language to translate the text.


## Contributing
Contributions are welcome! Please follow these steps to contribute:

-Fork the repository.
-Create a new branch (git checkout -b feature/your-feature).
-Commit your changes (git commit -am 'Add some feature').
-Push to the branch (git push origin feature/your-feature).
-Create a new Pull Request.


## Acknowledgements

**Xenova Transformers**: For providing the pre-trained models used in transcription and translation.
**React**: For the framework used to build the user interface.


## Contact
For questions or feedback, please contact me at ilyesharrache22@gmail.com.
