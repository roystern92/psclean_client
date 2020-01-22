export const contactControl = {
    name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'שם מלא'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },

    phone: {
        elementType: 'input',
        elementConfig: {
            type: 'number',
            placeholder: 'טלפון'
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },
    
    email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'דואר אלקטרוני'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },

    message: {
        elementType: 'input',
        elementConfig: {
            type: 'textarea',
            placeholder: 'תוכן הפנייה '
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    }
};
