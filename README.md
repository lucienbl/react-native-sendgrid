# **React Native SendGrid**
Is a API Wrapper for SendGrid, Usage is simple

# **Installation**
```bash
npm install --save react-native-sendgrid
```
# **Usage**
```javascript
import { sendGridEmail } from 'react-native-sendgrid'
...
...
const SENDGRIDAPIKEY = "YOURAPIKEY";
const FROMEMAIL = "test@test.com";
const TOMEMAIL = "me@test.com";
const SUBJECT = "You have a new message";

export class ContactForm extends Component {
	constructor(props) {
   		super(props);
   		this.state = {name : "", email: "", phone:""};
	}

	yourSendEmailFunction(){
		
		const ContactDetails = "Contact Data: " + this.state.name + " Mail: "+ this.state.email+" Phone: "+this.state.phone
		
		const sendRequest = sendGridEmail(SENDGRIDAPIKEY, TOMEMAIL, FROMEMAIL, SUBJECT, ContactDetails )
	        sendRequest.then((response) => {
	            console.log("Success")
	        }).catch((error) =>{
	            console.log(error)
	        });
	}

}
```

# **Use HTML**
By default all emails are send in "text/plain" format if you want to use html format just use this way:

```javascript
const sendRequest = sendGridEmail(SENDGRIDAPIKEY, TOMEMAIL, FROMEMAIL, SUBJECT, ContactDetails, "text/html" )
```



**admin@scriptmatico.com**
