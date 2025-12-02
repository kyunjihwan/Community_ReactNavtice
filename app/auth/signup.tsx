import EmailInput from "@/components/EmailInput";
import FixedBottomCTA from "@/components/FixedBottomCTA";
import PasswordConfrimInput from "@/components/PasswordConfrimInput";
import PasswordInput from "@/components/PasswordInput";
import { FormProvider, useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function SignupScreen() {
  const signupForm = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const onsubmit = (formValues: FormValues) => {
    console.log("formValues", formValues);
  };

  return (
    <FormProvider {...signupForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput submitBehavior="submit" />
        <PasswordConfrimInput />
      </View>
      <FixedBottomCTA
        label="회원가입하기"
        onPress={signupForm.handleSubmit(onsubmit)}
      />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
