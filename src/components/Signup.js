import React from 'react';
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  
  // const [name, setName] = useState();
  //   const [email, setEmail] = useState();
  //   const [password, setPassword] = useState()
  //   const [imageURL, setImageURL] = useState()
  //   const [age, setAge] = useState()
  //   const [gender, setGender] = useState()
  //   const [budget, setBudget] = useState()
  //   const [pet, setPet] = useState()
  //   const [clean, setClean] = useState()
  //   const [social, setSocial] = useState()
  //   const [alcnsmoke, setAlcnsmoke] = useState()
  //   const [sleep, setSleep] = useState()
  //   const [interest, setInterest] = useState()
  //   const match = "";
  //   const navigate = useNavigate()
        
  //   const handleSubmit = (e) => {
  //       e.preventDefault();
  //       axios.post('http://localhost:3001/signup', {name, email, password, age, gender, budget, pet, clean, social, alcnsmoke, sleep, interest, match})
  //       .then(result => {console.log(result)
  //           navigate('/login')
  //       })
  //       .catch(err=> console.log(err))
  //   }

  return (
    <div className={styles['form-container']}>
      <header id="signup-header">
        <h1>Sign Up!</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['form-group']}>
          <label>First Name</label>
          <input
            className={styles.input}
            {...register("firstName", { required: true })}
            placeholder="First Name"
            
          />
        </div>
        <div className={styles['form-group']}>
          <label>Last Name</label>
          <input
            className={styles.input}
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Email</label>
          <input
            className={styles.input}
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            placeholder="Email"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Phone Number</label>
          <input
            className={styles.input}
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Password</label>
          <input
            type="password"
            className={styles.input}
            {...register("password", { required: true })}
            placeholder="Password"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Re-enter Password</label>
          <input
            type="password"
            className={styles.input}
            {...register("reEnterPassword", {
              validate: value => value === watch('password') || "Passwords do not match"
            })}
            placeholder="Re-enter Password"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Gender</label>
          <input
            className={styles.input}
            {...register("gender", { required: true })}
            placeholder="Gender (e.g., Female, Male, Non-binary)"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Location</label>
          <input
            className={styles.input}
            {...register("location", { required: true })}
            placeholder="Location (City, State)"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Age</label>
          <input
            className={`${styles.input} ${styles['age-input']}`}
            {...register("age", { required: true, pattern: /^\d+$/ })}
            placeholder="Age"
            type="number"
          />
          {errors.age && <span>This field is required</span>}
        </div>
        <div className={styles['form-group']}>
          <label>What's your budget?</label>
          <input
            className={styles.input}
            {...register("pets", { required: true })}
            placeholder="Budget (eg. around 1000, around 2000, ...)"
          />
        </div>
        <div className={styles['form-group']}>
          <label>Do you have pets?</label>
          <input
            className={styles.input}
            {...register("budget", { required: true })}
            placeholder="Yes / No"
          />
        </div>
        {watch('pets') === 'Yes' && (
          <div className={styles['form-group']}>
            <label>What kind of pets do you have?</label>
            <input
              className={styles.input}
              {...register("petTypes", { required: true })}
              placeholder="List your pets (e.g., Cat, Dog, Bird, ...)"
            />
          </div>  
        )}
        <div className={styles['form-group']}>
          <label>How much do you prioritize cleanliness?</label>
          <input
            className={`${styles.input} ${styles['clean-input']}`}
            {...register("clean", { required: true})}
            placeholder="Cleanliness (eg. Basic Cleanliness, Deep Cleanliness, Sterile Cleanliness, ...)"
          />
          {errors.clean && <span>This field is required</span>}
        </div>
        <div className={styles['form-group']}>
          <label>What is your sleep schedule?</label>
          <input
            className={`${styles.input} ${styles['sleep-input']}`}
            {...register("sleep", { required: true })}
            placeholder="Sleep Schedule (eg. Early Bird (10PM or earlier), Intermediate (10PM-1AM),  Night Owl (1AM or later)"
          />
          {errors.sleep && <span>This field is required</span>}
        </div>
        <div className={styles['form-group']}>
          <label>Describe your social habits:</label>
          <input
            className={styles.input}
            {...register("social", { required: true })}
            placeholder="Social Habits (eg. extrovert, introvert, ...)"
          />
          {errors.social && <span>This field is required</span>}
        </div>
        <div className={styles['form-group']}>
          <label>Do you smoke or consume alcohol?</label>
          <input
            className={styles.input}
            {...register("alcnsmoke", { required: true })}
            placeholder="Alcohol/Smoking Habits (eg. rarely, frequently, ...)"
          />
          {errors.alcnsmoke && <span>This field is required</span>}
        </div>
        <div className={styles['form-group']}>
          <label>What are your interests?</label>
          <input
            className={styles.input}
            {...register("interest", { required: true })}
            placeholder="Interests (eg. movies, football, ...)"
          />
          {errors.interest && <span>This field is required</span>}
        </div>
        <div className={styles['form-group']}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              {...register("agreed", { required: true })}
            />
            <span>By agreeing to confirm your account, you are agreeing to share your contact information with your matches. (click button above)</span>
          </label>
        </div>
        <Link to="/explore" className={`${styles['submit-btn']} ${styles['btn']}`}>Confirm</Link>
      </form>
    </div>
  );
}