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
        <tr v-for="(item, index) in studentList" v-bind:key="index">
          <td>{{ item.name }}</td>
          <td>{{ item.rollNo }}</td>
          <td>
            <button @click="changeBtn">{{ button.text }}</button>
            <button @click="delArr(index)">Delete</button>
            <button @click.once="show(index)"> {{ button.text1 }}</button>
            <button @click="hide(index)">Hide</button>
           <td>
              <div v-if="showRow = !showRow" v-show="itemToShow == index">
              <!-- {{ show(index) }} -->
                {{ item.name }} {{ item.rollNo }}  {{ item.FathersName }} {{ item.address }} 
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
        text1: "Show Details"
      },
      edit: true,
      showRow: false,
      itemToShow : -1,
      
    };
  },
  methods: {
    onSubmit() {
      this.studentList.push(this.studentObj);
      this.studentObj = {
        name : "",
        rollNo: "",
        FathersName: "",
        address: "",
      }
    },

    delArr(index) {
      this.studentList.splice(index, 1);
    },

    changeBtn() {
      (this.edit = !this.edit),
      (this.button.text = this.edit ? "Edit" : "Update")
    },
    show(index){
      this.showRow = !this.showRow,
      this.itemToShow = index
      // event.target.disabled = true
      },
    hide(index){
      this.showRow = false,
      this.itemToShow = index
    }
  }
}
</script>