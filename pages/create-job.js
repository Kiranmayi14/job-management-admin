import { useForm } from "react-hook-form";
import { TextInput, Select, Textarea, Button, Container, Group, NumberInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useRouter } from "next/router";

export default function CreateJobPage() {
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <Container size="sm">
      <h1 className="text-2xl font-bold my-4">Create Job Opening</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Job Title" {...register("title", { required: "Job Title is required" })} error={errors.title?.message} />
        <TextInput label="Company Name" {...register("company", { required: "Company Name is required" })} error={errors.company?.message} />
        <TextInput label="Location" {...register("location", { required: "Location is required" })} error={errors.location?.message} />
        <Select label="Job Type" data={["Full-time", "Part-time", "Contract", "Internship"]} {...register("type")} />
        <NumberInput label="Salary Range" {...register("salary", { valueAsNumber: true })} />
        <DatePicker label="Application Deadline" onChange={(date) => setValue("deadline", date)} />
        <Textarea label="Job Description" {...register("description", { required: "Description is required" })} error={errors.description?.message} />
        <Group position="right" mt="md">
          <Button type="submit">Publish Job</Button>
        </Group>
      </form>
    </Container>
  );
}
