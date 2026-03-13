import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, KeyRound, Loader2, Lock } from 'lucide-react';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token') || '';
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidating, setIsValidating] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState('');
  const [isTokenValid, setIsTokenValid] = useState(false);

  useEffect(() => {
    const validateToken = async () => {
      if (!token) {
        setError('This password reset link is missing or invalid.');
        setIsValidating(false);
        return;
      }

      try {
        await axios.get(`/api/auth/reset-password/validate?token=${encodeURIComponent(token)}`);
        setIsTokenValid(true);
      } catch (err: any) {
        setError(err.response?.data?.error || 'This password reset link is invalid or has expired.');
        setIsTokenValid(false);
      } finally {
        setIsValidating(false);
      }
    };

    validateToken();
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post('/api/auth/reset-password', { token, password });
      setIsComplete(true);
      setTimeout(() => navigate('/login', { replace: true }), 2000);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Could not reset password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-slate-950 flex items-center justify-center p-4 transition-colors">
      <div className="w-full max-w-md rounded-2xl border border-black/5 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 transition-colors">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10">
            {isComplete ? <CheckCircle2 className="h-6 w-6 text-[#25D366]" /> : <KeyRound className="h-6 w-6 text-[#25D366]" />}
          </div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {isComplete ? 'Password updated' : 'Choose a new password'}
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            {isComplete ? 'You can sign in with your new password now.' : 'Enter a new password for your account.'}
          </p>
        </div>

        {isValidating ? (
          <div className="flex items-center justify-center py-12 text-slate-500 dark:text-slate-400">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        ) : !isTokenValid ? (
          <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        ) : isComplete ? (
          <div className="rounded-lg border border-[#25D366]/20 bg-[#25D366]/5 p-4 text-sm text-slate-700 dark:border-[#25D366]/10 dark:bg-[#25D366]/10 dark:text-gray-200">
            Password updated successfully. Redirecting to sign in...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">New password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-600"
                  placeholder="At least 8 characters"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Confirm new password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-gray-600"
                  placeholder="Repeat your password"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600 dark:border-red-900/30 dark:bg-red-900/20 dark:text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || Boolean(error && !password)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-2.5 font-medium text-white transition-colors hover:bg-[#128C7E] disabled:opacity-50"
            >
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Update password
            </button>
          </form>
        )}

        <div className="mt-8 border-t border-gray-100 pt-6 text-center dark:border-slate-800">
          <Link to="/login" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-[#25D366] dark:text-slate-400">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
