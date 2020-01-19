export const signInControls = {
    Email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'exemple@site.com'
        },
        value: '',
        validation: {
            required: true,
            isEmail: true
        },
        valid: false,
        touched: false
    },


    Name: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'John Miller '
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    },

    Message: {
        elementType: 'input',
        elementConfig: {
            type: 'textarea',
            placeholder: 'Add message '
        },
        value: '',
        validation: {
            required: true,
        },
        valid: false,
        touched: false
    }
};
