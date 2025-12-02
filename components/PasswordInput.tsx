import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyleSheet, TextInputProps } from "react-native";
import InputField from "./InputField";

interface Props {
  submitBehavior?: TextInputProps["submitBehavior"];
}

function PasswordInput({ submitBehavior = "blurAndSubmit" }: Props) {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 8) {
            return "비밀번호 8자 이상 입력해주세요";
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => {
        return (
          <InputField
            ref={ref}
            label="비밀번호"
            placeholder="비밀번호을 입력해주세요."
            submitBehavior={submitBehavior}
            textContentType="oneTimeCode"
            secureTextEntry
            onSubmitEditing={() => setFocus("passwordConfirm")}
            value={value}
            onChangeText={onChange}
            error={error?.message}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({});

export default PasswordInput;
