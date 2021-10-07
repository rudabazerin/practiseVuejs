<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <input type="text" label="name" v-model="studentObject.name" >
      <input type="number" label="rollNo" v-model="studentObject.rollNo" >
      <input type="text" label="Fathers_name" v-model="studentObject.Fathers_name" >
      <input type="text" label="address" v-model="studentObject.address" >
      <button>submit</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rollNo</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>miraz</td>
          <td>100</td>
          <td>
            <button @click="changeBtn">{{ button.text }}</button>
            <button @click="delArr(index)">delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>


<script>
export default {
  //  name: '',
  //  rollNo:'',
  //  Fathers_Name:' ',
  //  address:' ',  
  data() {
    return {
      studentObject: [{
        name:'',
        rollNo:'',
        Fathers_Name: '',
        address: '',
       }],
      students_details: [],
      button: {
        text: "Edit",
      },
      edit: true,
    };
  },
  methods: {
    onSubmit() {
      return this.students_details.push(this.studentObject);
    },
    changeBtn() {
      student.edit = !student.edit;
      student.button.text = student.edit ? "Edit" : "Update";
    },
    delArr(index) {
      this.students_details.splice(index, 1);
    },
  },
};
</script>