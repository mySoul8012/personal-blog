<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor" v-if="flag">
      <md-table-row slot="md-table-row" slot-scope="{ item }"  v-on:click="mdTableRow({item})">
        <md-table-cell md-label="id">{{ item.id }}</md-table-cell>
        <md-table-cell md-label="文章标题">{{ item.title }}</md-table-cell>
        <md-table-cell md-label="文章标签">{{ item.label }}</md-table-cell>
        <md-table-cell md-label="文章发布时间">{{ item.titme }}</md-table-cell>
      </md-table-row>
    </md-table>

    <md-card-content v-if="flagCardContent">
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Title</label>
              <md-input v-model="title" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>label</label>
              <md-input v-model="label" type="text"></md-input>
            </md-field>
          </div>
         
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>Please write your story</label>
              <md-textarea v-model="content" style="height:300000px"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update</md-button>
          </div>
        </div>
      </md-card-content>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      title: "",
      label: "",
      content: "",
      flag: true,
      flagCardContent: false,
      selected: [],
      users: [
        {
          id: 1,
          title: "test title",
          label: "test label",
          titme: "2021/01/08"
        },
        {
          id: 2,
          title: "test title",
          label: "test label",
          titme: "2021/01/08"
        }
      ]
    };
  },
  methods: {
    mdTableRow: async function(test){
      console.log(test)
      this.flag = false;
      this.flagCardContent = true;
    }
  }
};
</script>
