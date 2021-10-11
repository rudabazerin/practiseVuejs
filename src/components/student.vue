<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <label for="new-student">Add new student:</label>
      <input type="text" label="name" v-model="studentObj.name" >
      <input type="number" label="rollNo" v-model="studentObj.rollNo" >
      <input type="text" label="Fathers_name" v-model="studentObj.FathersName" >
      <input type="text" label="address" v-model="studentObj.address" >
      <button>submits</button>
    </form>
 

    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rollNo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(item, index) in studentList'>
          
          <td> {{item.name}} </td>
          <td> {{item.rollNo}}</td>

           <td>
            <button @click="changeBtn">{{ button.text }}</button>
            <button >View</button>
            <button @click='delArr(index)'>Delete </button>
         </td>
        </tr>
      </tbody>
    </table>
    <br>
  </div>
</template>


<script>
export default {
  data() {
    return {
     studentObj:
      {
      name: '', rollNo: '', FathersName: '',address: '',
     }, 
     studentList:[],
     button:{
       text: 'Edit',
     },
     edit:true,
     completed: false,
    }
  },
  methods: {
    onSubmit(){
      this.studentList.push(this.studentObj);
    },

    delArr(index){
      this.studentList.splice(index,1);
    },
    changeBtn(){
      this.edit = !this.edit,
      this.button.text = this.edit ? 'Edit' : 'Update'
    }
  }
};
</script>