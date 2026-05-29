# Email Setup Guide - Business Fraud MRI™

## Current Status

✅ **Database**: Contact submissions are automatically saved to Supabase
✅ **Edge Function**: Deployed and ready to process form submissions
✅ **Frontend**: Contact form successfully calls the edge function

## How to Enable Automatic Emails

### Option 1: Using Resend (Recommended - Free Tier)

**Free tier includes:**
- 3,000 emails/month
- 100 emails/day
- Perfect for contact forms

**Setup Steps:**

1. **Create Resend Account:**
   - Go to https://resend.com
   - Sign up for free account
   - Verify your email

2. **Get API Key:**
   - Dashboard → API Keys
   - Create new API key
   - Copy the key (starts with `re_`)

3. **Add API Key to Supabase:**
   - In Supabase dashboard, go to Edge Functions → Secrets
   - Add secret named: `RESEND_API_KEY`
   - Paste your Resend API key as the value

4. **Verify Domain (Optional for Production):**
   - In Resend dashboard, add your domain
   - Update "from" address in edge function from `onboarding@resend.dev` to your domain
   - Example: `noreply@businessfraudmri.com`

### Option 2: Using SendGrid (Alternative)

**Free tier includes:**
- 100 emails/day forever
- Good for low-volume contact forms

**Setup:**
1. Create account at https://sendgrid.com
2. Get API key from Settings → API Keys
3. Add `SENDGRID_API_KEY` secret to Supabase
4. Update edge function to use SendGrid instead

## How It Works Now

### Without Resend API Key:
- ✅ Form submissions are saved to database
- ✅ Success message shown to user
- ✅ Submission ID generated
- ❌ No emails sent (check logs)

### With Resend API Key Configured:
- ✅ Form submissions saved to database
- ✅ **Email sent to:** businessfraudmri@gmail.com
- ✅ **Auto-reply sent to:** user's email
- ✅ "Received within 24 hours" message shown

## Email Templates

### Email to You (businessfraudmri@gmail.com):
- **Subject:** New Contact Form Submission: [Subject]
- **Contains:** Name, email, company, phone, message, timestamp
- **Includes:** Submission ID for tracking

### Auto-Reply to User:
- **Subject:** We received your message - Business Fraud MRI™
- **Content:**
  - Confirmation of receipt
  - Promise of 24-hour response time
  - Direct contact information
  - Message summary

## Testing the Form

1. **Submit a test message:**
   - Go to your website's contact page
   - Fill out the form
   - Submit

2. **Check what happens:**
   - ✅ Success message appears
   - ✅ Form clears
   - Check Supabase database for the submission
   - If Resend is configured: Check your email

3. **View Submissions in Supabase:**
   - Go to Supabase Dashboard
   - Table Editor → contact_submissions
   - All submissions are there!

4. **Check Edge Function Logs:**
   - Supabase Dashboard → Edge Functions → contact-form
   - View Logs to see email sending status

## Current Configuration

**Edge Function:** `contact-form`
**Database Table:** `contact_submissions`
**Required Secret:** `RESEND_API_KEY` (optional but recommended)

### Your Contact Info (Configured):
- **Email:** businessfraudmri@gmail.com
- **Phone:** +251 799 103 334
- **To Email:** businessfraudmri@gmail.com
- **From Email:** onboarding@resend.dev (or your domain)

## Troubleshooting

### Form Doesn't Submit:
- Check browser console for errors
- Verify Supabase URL and ANON_KEY in .env
- Check edge function is deployed

### Emails Not Sending:
- Verify RESEND_API_KEY secret is set in Supabase
- Check edge function logs for errors
- Verify Resend account is active
- Check spam folder for auto-replies

### Can't See Submissions:
- Go to Supabase → Table Editor → contact_submissions
- Check RLS policies are correct
- Verify service role has access

## Next Steps

1. **Immediate:** Form works and saves to database ✅
2. **Recommended:** Add Resend API key for email notifications
3. **Production:** Verify your domain in Resend
4. **Optional:** Set up email templates in Resend dashboard

## Cost

**Free tier usage:**
- Resend: 3,000 emails/month FREE
- SendGrid: 100 emails/day FREE
- Supabase: Already included in your plan
- Edge Functions: Already included

**Expected volume:**
- 10-50 submissions/month = well within free tier
- 100+ submissions/month = consider paid plan

---

**Your contact form is fully functional and saves all submissions automatically!**

Add Resend API key to enable email notifications and auto-replies.
