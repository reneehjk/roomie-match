import React from 'react';
import styles from './Signup.module.css';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles['form-container']}>
      <header id="signup-header">
        <h1>Tell Us...</h1>
      </header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['input-pair']}>
          <input
            className={styles.input}
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />
          <input
            className={styles.input}
            {...register("lastName", { required: true })}
            placeholder="Last Name"
          />
        </div>
        <div className={styles['input-pair']}>
          <input
            className={styles.input}
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            placeholder="Email"
          />
          <input
            className={styles.input}
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
          />
        </div>
        <div className={styles['input-pair']}>
          <input
            type="password"
            className={styles.input}
            {...register("password", { required: true })}
            placeholder="Password"
          />
          <input
            type="password"
            className={styles.input}
            {...register("reEnterPassword", {
              validate: value => value === watch('password') || "Passwords do not match"
            })}
            placeholder="Re-enter Password"
          />
        </div>

        <div className={styles['input-pair']}>
          <fieldset className={`${styles['radio-group']} ${styles['radio-group-wide']}`}>
            <legend>What best describes your gender?</legend>
            <label><input type="radio" {...register("gender")} value="Female" /> Female</label>
            <label><input type="radio" {...register("gender")} value="Male" /> Male</label>
            <label><input type="radio" {...register("gender")} value="Non-binary" /> Non-binary</label>
            <label><input type="radio" {...register("gender")} value="Other" /> Other</label>
          </fieldset>

          <fieldset className={`${styles['radio-group']} ${styles['radio-group-wide']}`}>
            <legend>What gender are you comfortable living with?</legend>
            <label><input type="radio" {...register("livingPreference")} value="Female-only" /> Female-only</label>
            <label><input type="radio" {...register("livingPreference")} value="Male-only" /> Male-only</label>
            <label><input type="radio" {...register("livingPreference")} value="No Preference" /> No Preference</label>
            <label><input type="radio" {...register("livingPreference")} value="Other" /> Other</label>
          </fieldset>
        </div>

        <div className={styles['input-pair']}>
          <label className={styles['age-label']}>What is your age? (whole numbers only)</label>
          <input
            className={`${styles.input} ${styles['age-input']}`}
            {...register("age", { required: true, pattern: /^\d+$/ })}
            placeholder="0"
            type="number"
          />
          {errors.age && <span>This field is required</span>}

          <label>
            Age preference (e.g., 25-30):
            <input
              className={styles.input}
              {...register("agePreference", { required: true, pattern: /^\d+-\d+$/ })}
              placeholder="25-30"
            />
          </label>
          {errors.agePreference && <span>Enter a valid age range</span>}
        </div>

        <div className={styles['input-pair']}>
          <fieldset className={styles['radio-group']}>
            <legend>Do you have pets?</legend>
            <label><input type="radio" {...register("pets")} value="Yes" /> Yes</label>
            <label><input type="radio" {...register("pets")} value="No" /> No</label>
          </fieldset>

          {watch('pets') === 'Yes' && (
            <fieldset className={`${styles['radio-group']} ${styles['radio-group-wide']}`}>
              <legend>What kind of pets do you have?</legend>
              <label><input type="checkbox" {...register("petTypes.cats")} /> Cats</label>
              <label><input type="checkbox" {...register("petTypes.dogs")} /> Dogs</label>
              <label><input type="checkbox" {...register("petTypes.birds")} /> Birds</label>
              <label><input type="checkbox" {...register("petTypes.reptile")} /> Reptile</label>
              <label><input type="checkbox" {...register("petTypes.other")} /> Other</label>
            </fieldset>
          )}
          <div>
            <fieldset className={`${styles['radio-group']} ${styles['radio-group-wide']}`}>
              <legend>Are you okay with other pets?</legend>
              <label><input type="radio" {...register("petPreference")} value="Yes" /> Yes</label>
              <label><input type="radio" {...register("petPreference")} value="Cats Only" /> Cats Only</label>
              <label><input type="radio" {...register("petPreference")} value="Dogs Only" /> Dogs Only</label>
              <label><input type="radio" {...register("petPreference")} value="No" /> No</label>
            </fieldset>
          </div>
        </div>
        
        <input type="submit" className={styles.button} />
      </form>
    </div>
  );
}
