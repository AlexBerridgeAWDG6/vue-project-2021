<template>
  <div class="about">
    <h1>Your Account</h1>
  </div>
  <body v-if="userDetails">
    <div class="profile">
      <div>
        <el-card class="box-card">
          <div>
            <div>
              Welcome Back
              <span style="color: green; font-weight: bold"> {{ userDetails.email }} </span>
              <br />
              <el-button
                type="text"
                icon="el-icon-user"
                @click="$emit('logout')"
                >Logout</el-button
              >
            </div>
          </div>
        </el-card>
      </div>
      <div style ="display: none">Email : {{userDetails.fullName}}</div>
    </div>
    <b>
      <div>
        <h1>Update Account</h1>
      </div>
    </b>
    <div>To update your account details please fill out the form below:</div>
    <el-form>
      <el-form-item label="Username">
        <el-input
          v-model="username"
          :placeholder= userDetails.email
          autocomplete="off"
          required
        ></el-input>
      </el-form-item>
      <el-form-item label="Name">
        <el-input
          v-model="fullName"
          :placeholder= userDetails.fullName
          autocomplete="off"
          required
        ></el-input>
      </el-form-item>
      <el-form-item label="Institution">
        <el-input
          v-model="institution"
          :placeholder= userDetails.institution
          autocomplete="off"
          required
        ></el-input>
      </el-form-item>
      <el-form-item label="Address">
        <el-input
          v-model="address"
          :placeholder= userDetails.address
          autocomplete="off"
          required
        ></el-input>
      </el-form-item>
      <el-form-item label="Contact Details">
        <el-input
          v-model="contact_details"
          :placeholder= userDetails.phoneNumber
          autocomplete="off"
          required
        ></el-input>
      </el-form-item>
      <el-button>Update Details</el-button>
    </el-form>
  </body>
</template>

<script>
import {
	firebaseAuthentication,
	firebaseFireStore
} from "@/firebase/database";
import {
	ref,
	watchEffect
} from 'vue';

export default {
	props: {
		user: {
			type: Object,
			default: () => {},
		},
	},
	setup() {

		//  const userId = firebaseAuthentication.currentUser;
		const userDetails = ref(null);
		//console.log(firebaseAuthentication.currentUser.uid)

		//  userDetails.value = firebaseFireStore.collection("users").doc(userId);

		//  console.log(userDetails.value)
		//testing if user is retrieved



		const snapShotObject = firebaseFireStore.collection("users").doc(`${firebaseAuthentication.currentUser.uid}`)


		const unsub = snapShotObject.onSnapshot(
			doc => {
				// need to make sure the doc exists & has data
				if (doc.data()) {
					// console.log(doc.data());
					userDetails.value = {
						fullName: doc.data().fullName,
						email: doc.data().email,
						institution: doc.data().institution,
						address: doc.data().address,
						phoneNumber: doc.data().phoneNumber
					};

				}
			},
		);

		watchEffect(onInvalidate => {
			onInvalidate(() => unsub());
		});

		console.log(userDetails.value)
		const email = ref("");
		const username = ref("");
		const fullName = ref("");
		const institution = ref("");
		const address = ref("");
		const phoneNumber = ref("");
		return {
			email,
			username,
			fullName,
			institution,
			address,
			phoneNumber,
			userDetails
		}
	}
}
</script>

<style scoped>
.profile {
  text-align: center;
}
.about {
  text-align: middle;
  font-size: 20px;
}
.header {
  text-align: left;
}

button:hover {
  opacity: 0.9;
}
button {
  display: inline-block;
  background-color: black;
  width: 50%;
  color: white;
  padding: 15px;
  margin: 10px 0px;
  cursor: pointer;
}
</style>
