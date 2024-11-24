members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Violão'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
                 /* fname: null, 
                 lname: null,
                 instrument: null, */
            }
        }
    },
    methods: {
        handleAddMember: function() {
            if (this.newMember.fname && this.newMember.lname && this.newMember.instrument) {
                this.members.push(this.newMember)
                this.newMember = {
                    /*                 fname: null,
                                    lname: null,
                                    instrument: null, */
                                }
            } else {
                alert('Por favor preencha todos os campos')
            } 
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
