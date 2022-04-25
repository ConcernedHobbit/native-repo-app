import { Formik } from 'formik'
import { View, Pressable, Text, StyleSheet } from 'react-native'
import theme from '../theme'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup'

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff'
  },
  button: {
    margin: 5,
    padding: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 5
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
})

const SignInForm = ({ handleSubmit }) => (
  <View style={styles.form}>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry />
    <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>Sign in</Text>
    </Pressable>
  </View>
)

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values)
  }

  const initialValues = {
    username: '',
    password: ''
  }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit} 
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => 
        <SignInForm handleSubmit={handleSubmit} />
      }
    </Formik>
  )
}

export default SignIn
