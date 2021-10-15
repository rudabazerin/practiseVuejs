<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <label for="new-student">Add new student:</label>
      <input type="text" label="name" v-model="studentObj.name" />
      <input type="number" label="rollNo" v-model="studentObj.rollNo" />
      <input
        type="text"
        label="Fathers_name"
        v-model="studentObj.FathersName"
      />
      <input type="text" label="address" v-model="studentObj.address" />
      <button>Submit</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rollNo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in studentList" v-bind:key="studentList.name">
          <td>{{ item.name }}</td>
          <td>{{ item.rollNo }}</td>
        

          <td>
            <button @click="changeBtn">{{ button.text }}</button>
            <button @click="delArr(index)">Delete</button>
            <button @click="show(index)">View</button>
            <button @click="hide(index)">Hide details</button>

           <td>
              <div v-show="showRow">
              {{ item.name }} {{ item.rollNo }} {{ item.FathersName }}
              {{ item.address }}
              </div>
           </td>
           </tr>
        
 
        
      </tbody>
    </table>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      studentObj: {
        name: "",
        rollNo: "",
        FathersName: "",
        address: "",
      },
      studentList: [],
      button: {
        text: "Edit",
      },
      edit: true,
      showRow: false,
      isHidden: true
      
    };
  },
  methods: {
    onSubmit() {
      this.studentList.push(this.studentObj);
      this.studentObj = ' '
    },

    delArr(index) {
      this.studentList.splice(index, 1);
    },

    changeBtn() {
      (this.edit = !this.edit),
      (this.button.text = this.edit ? "Edit" : "Update");
    },
    show(index){
      this.showRow = true
    },
    hide(index){
      this.showRow = false
    }
  }
}
</script>