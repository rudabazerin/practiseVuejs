<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" label="name" v-model="name" />
      <input type="number" label="roll" v-model="rollNo" />
      <input type="text" label="fathers name" v-model="FathersName" />
      <input type="text" label="address" v-model="address" />
      <button>submit</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>roll</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>miraz</td>
          <td>100</td>
          <td>

            <button @click="ChangeBtn"> {{ button.text }}</button>
            <button @click = 'delArr(index)'>delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>


<script>
export default {
    data(){
   return {
       
        studentObject:  
        {
              name: '',
              rollNo: '',
              FathersName: '',
              address: '',
        },
        students_details:[],
        button:{
          text: 'Edit'
        },
        edit: true,
    }
  },
  methods: {
    onSubmit(){
      return this.students_details.push(this.studentObject);
    },
    changeBtn(){
      student.edit = !student.edit;
      student.button.text = student.edit ? 'Edit' : 'Update'
    },
    delArr(index){
      this.students_details.splice(index, 1);
    }
    
  }
}
</script>