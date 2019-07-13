This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Description

The app contains a registraion page and a dasboard which subscribes to data from multiple sources.

Instructions to start the app

    1. Use git clone or download the zip.
    
    2. If you've downloaded the zip extract it.
    
    3. cd into the repository.
    
    4. Run npm install or yarn
    
    5. Run npm start or yarn start
    
    6. Browse to http://localhost:3000.

Improvements required

    1. A highher order component could be create and used for WebSocket connection to avoid websocket code repeatation at component level.
    
    Example: 
        <WebSocket src={srcURL} maxRetrie={20}>
            <ExampleComponent></ExampleComponent>
        </WebSocket>
        
    2. Styling for registraion page
    
    3. Add title to each weidget
    
    4. Styling for VideoPlayer Component
    
    5. Put a loading message
    
