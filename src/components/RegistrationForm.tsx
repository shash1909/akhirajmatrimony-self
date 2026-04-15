import { useState, forwardRef } from "react";
import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full Name is required").max(100),
  gender: z.string().min(1, "Gender is required"),
  dob: z.string().min(1, "Date of Birth is required"),
  height: z.string().min(1, "Height is required"),
  religion: z.string().trim().min(1, "Religion is required").max(50),
  caste: z.string().trim().min(1, "Caste is required").max(50),
  education: z.string().trim().min(1, "Education is required").max(100),
  occupation: z.string().trim().min(1, "Occupation is required").max(100),
  income: z.string().trim().min(1, "Income is required").max(50),
  city: z.string().trim().min(1, "City is required").max(50),
  state: z.string().trim().min(1, "State is required").max(50),
  contactNumber: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  maritalStatus: z.string().min(1, "Marital Status is required"),
  aboutYourself: z.string().trim().min(1, "Tell us about yourself").max(1000),
  partnerPreferences: z.string().trim().min(1, "Partner preferences are required").max(1000),
});

type FormData = z.infer<typeof formSchema>;

const initialForm: FormData = {
  fullName: "", gender: "", dob: "", height: "", religion: "", caste: "",
  education: "", occupation: "", income: "", city: "", state: "",
  contactNumber: "", email: "", maritalStatus: "", aboutYourself: "", partnerPreferences: "",
};

const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-colors";
const labelClass = "block text-sm font-semibold text-primary mb-1.5";
const errorClass = "text-xs text-destructive mt-1";

/* ✅ MOVED OUTSIDE */
const SelectField = ({ label, field, options, placeholder, form, update, errors }: any) => (
  <div>
    <label className={labelClass}>{label}</label>
    <select
      value={form[field]}
      onChange={(e) => update(field, e.target.value)}
      className={inputClass}
    >
      <option value="">{placeholder}</option>
      {options.map((o: string) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
    {errors[field] && <p className={errorClass}>{errors[field]}</p>}
  </div>
);

/* ✅ MOVED OUTSIDE */
const Field = ({ label, field, type = "text", placeholder, form, update, errors }: any) => (
  <div>
    <label className={labelClass}>{label}</label>
    <input
      type={type}
      value={form[field]}
      onChange={(e) => update(field, e.target.value)}
      placeholder={placeholder}
      className={inputClass}
    />
    {errors[field] && <p className={errorClass}>{errors[field]}</p>}
  </div>
);

const RegistrationForm = forwardRef<HTMLDivElement>((_, ref) => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as keyof FormData;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSubmitting(true);
    setSuccess(false);

    const msg = `*New Matrimony Registration*

Name: ${form.fullName}
Gender: ${form.gender}
Date of Birth: ${form.dob}
Height: ${form.height}
Religion: ${form.religion}
Caste: ${form.caste}
Education: ${form.education}
Occupation: ${form.occupation}
Income: ${form.income}
City: ${form.city}
State: ${form.state}
Phone: ${form.contactNumber}
Email: ${form.email}
Marital Status: ${form.maritalStatus}

*About:*
${form.aboutYourself}

*Partner Preferences:*
${form.partnerPreferences}`;

    const encoded = encodeURIComponent(msg);
    const url = `https://wa.me/918317047114?text=${encoded}`;

    setSuccess(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setSubmitting(false);
    }, 1500);
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-background" id="register">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4">
          Register <span className="text-gradient-gold">Now For Free</span>
        </h2>


<form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 sm:p-10 shadow-lg border space-y-6">

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    <Field label="Full Name" placeholder="Enter your name" field="fullName" form={form} update={update} errors={errors} />

    <SelectField label="Gender" field="gender" form={form} update={update} errors={errors}
      placeholder="Select Gender" options={["Male", "Female"]} />

    <Field label="Date of Birth" field="dob" type="date" form={form} update={update} errors={errors} />

    <SelectField label="Height" field="height" form={form} update={update} errors={errors}
      placeholder="Select Height" options={[
        "4'0\"","4'1\"", "4'2\"", "4'3\"", "4'4\"", "4'5\"","4'6\"", "4'7\"", "4'8\"", "4'9\"", "4'10\"", "4'11\"", "5'0\"", "5'1\"","5'2\"","5'3\"","5'4\"","5'5\"","5'6\"","5'7\"","5'8\"","5'9\"","5'10\"","5'11\"", "6'0+\""
      ]} />

    <SelectField label="Religion" field="religion" form={form} update={update} errors={errors}
      placeholder="Select Religion" options={[
        "Hindu", "Muslim", "Christian", "Sikh", "Other"
      ]} />

    <SelectField label="Caste" field="caste" form={form} update={update} errors={errors}
      placeholder="Select Caste" options={[
        "General", "OBC", "SC", "ST", "Other"
      ]} />

    <Field label="Education"  placeholder="Your Education" field="education" form={form} update={update} errors={errors} />

    <Field label="Occupation" field="occupation"  placeholder="Your Occupation" form={form} update={update} errors={errors} />

    <SelectField label="Income" field="income" form={form} update={update} errors={errors}
      placeholder="Select Income" options={[
        "Below 1 LPA", "1-3 LPA", "3-5 LPA", "5-10 LPA", "10+ LPA"
      ]} />

    <Field label="City" placeholder="Enter your City"  field="city" form={form} update={update} errors={errors} />

    <Field label="State" field="state"  placeholder="Enter your State" form={form} update={update} errors={errors} />

    <Field label="Contact Number"  placeholder="Enter your Contact Number" field="contactNumber" form={form} update={update} errors={errors} />

    <Field label="Email"  placeholder="Enter your email" field="email" type="email" form={form} update={update} errors={errors} />

    <SelectField label="Marital Status" field="maritalStatus" form={form} update={update} errors={errors}
      placeholder="Select Status" options={[
        "Never Married", "Divorced", "Widowed"
      ]} />

  </div>

  {/* About */}
  <div>
    <label className={labelClass}>About Yourself</label>
    <textarea
      value={form.aboutYourself}
      onChange={(e) => update("aboutYourself", e.target.value)}
      className={inputClass}
    />
    {errors.aboutYourself && <p className={errorClass}>{errors.aboutYourself}</p>}
  </div>

  {/* Partner */}
  <div>
    <label className={labelClass}>Partner Preferences</label>
    <textarea
      value={form.partnerPreferences}
      onChange={(e) => update("partnerPreferences", e.target.value)}
      className={inputClass}
    />
    {errors.partnerPreferences && <p className={errorClass}>{errors.partnerPreferences}</p>}
  </div>

  <button type="submit" className="w-full bg-yellow-500 py-3 rounded-lg">
    Submit
  </button>

</form>
      </div>
    </section>
  );
});

RegistrationForm.displayName = "RegistrationForm";

export default RegistrationForm;