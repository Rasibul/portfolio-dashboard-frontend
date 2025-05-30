import { useForm, useFieldArray } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import apiRequestHandler from "../../../utlis/apiRequestHandler";

const CreateProject = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
            title: "",
            projectImage: "",
            liveLink: "",
            clientRepo: "",
            serverRepo: "",
            description: "",
            technologies: [{ name: "", logo: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "technologies",
    });

    const { mutate, isLoading } = useMutation({
        mutationFn: async (projectData) =>
            await apiRequestHandler("/project", "POST", projectData),
        onSuccess: (data) => {
            console.log("Project created successfully:", data);
            toast.success("Project created successfully!");
            reset();
            navigate("/dashboard/create-projects");
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Project creation failed!");
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
                <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
                    Create New Project
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Project Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Project Title"
                            {...register("title", { required: true })}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Project Image URL"
                            {...register("projectImage")}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Live Link"
                            {...register("liveLink")}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Client Repo Link"
                            {...register("clientRepo")}
                            className="input"
                        />
                        <input
                            type="text"
                            placeholder="Server Repo Link"
                            {...register("serverRepo")}
                            className="input"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <textarea
                            placeholder="Project Description"
                            {...register("description")}
                            className="input h-32 resize-none"
                        />
                    </div>

                    {/* Technologies */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-gray-700">
                            Technologies Used
                        </h2>
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex flex-col md:flex-row gap-4 mb-4">
                                <input
                                    type="text"
                                    placeholder="Tech Name"
                                    {...register(`technologies.${index}.name`)}
                                    className="input flex-1"
                                />
                                <input
                                    type="text"
                                    placeholder="Tech Logo URL"
                                    {...register(`technologies.${index}.logo`)}
                                    className="input flex-1"
                                />
                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="text-red-500 hover:underline"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => append({ name: "", logo: "" })}
                            className="text-blue-600 hover:underline mt-2"
                        >
                            + Add Technology
                        </button>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition"
                        >
                            {isLoading ? "Submitting..." : "Create Project"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;
