import { useForm, ValidationError } from "@formspree/react";
export default function Newsletter() {
  const [state, handleSubmit] = useForm("mgedweog");
  if (state.succeeded) {
    return <p>Thanks for Signing Up!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          id="email"
          type="email"
          name="email"
          className="p-2 m-2 rounded bg-gray-50 flex-grow"
          placeholder="Your email here"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="text-left rounded bg-gray-100 max-w-min p-2 m-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
