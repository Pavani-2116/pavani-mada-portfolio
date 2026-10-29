create table public.sources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  original_url text,
  title text,
  extracted_text text,
  publication_date text,
  retrieval_status text not null default 'pending'
    check (retrieval_status in ('pending','fetching','retrieved','partially_retrieved','unavailable','unsupported','needs_verification')),
  research_note text,
  is_manual boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.research_briefs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  research_question text not null,
  brief_content jsonb not null,
  generation_mode text not null default 'ai' check (generation_mode in ('ai','basic_outline')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.research_brief_sources (
  research_brief_id uuid not null references public.research_briefs(id) on delete cascade,
  source_id uuid not null references public.sources(id) on delete cascade,
  primary key (research_brief_id, source_id)
);

create table public.drafts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  title text not null,
  original_text text not null,
  revised_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.writing_suggestions (
  id uuid primary key default gen_random_uuid(),
  draft_id uuid not null references public.drafts(id) on delete cascade,
  issue_type text not null,
  original_passage text not null,
  suggested_rewrite text not null,
  explanation text not null,
  status text not null default 'pending'
    check (status in ('pending','accepted','rejected','applied')),
  start_offset integer not null,
  end_offset integer not null,
  source text not null default 'rule' check (source in ('rule','ai')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_sources_user on public.sources(user_id);
create index idx_research_briefs_user on public.research_briefs(user_id);
create index idx_drafts_user on public.drafts(user_id);
create index idx_writing_suggestions_draft on public.writing_suggestions(draft_id);

grant select, insert, update, delete on public.sources to authenticated;
grant select, insert, update, delete on public.research_briefs to authenticated;
grant select, insert, update, delete on public.research_brief_sources to authenticated;
grant select, insert, update, delete on public.drafts to authenticated;
grant select, insert, update, delete on public.writing_suggestions to authenticated;
grant all on public.sources to service_role;
grant all on public.research_briefs to service_role;
grant all on public.research_brief_sources to service_role;
grant all on public.drafts to service_role;
grant all on public.writing_suggestions to service_role;

alter table public.sources enable row level security;
alter table public.research_briefs enable row level security;
alter table public.research_brief_sources enable row level security;
alter table public.drafts enable row level security;
alter table public.writing_suggestions enable row level security;

create policy "sources_owner_select" on public.sources for select to authenticated using (auth.uid() = user_id);
create policy "sources_owner_insert" on public.sources for insert to authenticated with check (auth.uid() = user_id);
create policy "sources_owner_update" on public.sources for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "sources_owner_delete" on public.sources for delete to authenticated using (auth.uid() = user_id);

create policy "briefs_owner_select" on public.research_briefs for select to authenticated using (auth.uid() = user_id);
create policy "briefs_owner_insert" on public.research_briefs for insert to authenticated with check (auth.uid() = user_id);
create policy "briefs_owner_update" on public.research_briefs for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "briefs_owner_delete" on public.research_briefs for delete to authenticated using (auth.uid() = user_id);

create policy "brief_sources_owner" on public.research_brief_sources for all to authenticated
  using (
    exists (select 1 from public.research_briefs b where b.id = research_brief_id and b.user_id = auth.uid())
    and exists (select 1 from public.sources s where s.id = source_id and s.user_id = auth.uid())
  )
  with check (
    exists (select 1 from public.research_briefs b where b.id = research_brief_id and b.user_id = auth.uid())
    and exists (select 1 from public.sources s where s.id = source_id and s.user_id = auth.uid())
  );

create policy "drafts_owner_select" on public.drafts for select to authenticated using (auth.uid() = user_id);
create policy "drafts_owner_insert" on public.drafts for insert to authenticated with check (auth.uid() = user_id);
create policy "drafts_owner_update" on public.drafts for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "drafts_owner_delete" on public.drafts for delete to authenticated using (auth.uid() = user_id);

create policy "suggestions_owner_select" on public.writing_suggestions for select to authenticated
  using (exists (select 1 from public.drafts d where d.id = draft_id and d.user_id = auth.uid()));
create policy "suggestions_owner_insert" on public.writing_suggestions for insert to authenticated
  with check (exists (select 1 from public.drafts d where d.id = draft_id and d.user_id = auth.uid()));
create policy "suggestions_owner_update" on public.writing_suggestions for update to authenticated
  using (exists (select 1 from public.drafts d where d.id = draft_id and d.user_id = auth.uid()))
  with check (exists (select 1 from public.drafts d where d.id = draft_id and d.user_id = auth.uid()));
create policy "suggestions_owner_delete" on public.writing_suggestions for delete to authenticated
  using (exists (select 1 from public.drafts d where d.id = draft_id and d.user_id = auth.uid()));

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_sources_updated_at before update on public.sources
  for each row execute function public.set_updated_at();
create trigger set_research_briefs_updated_at before update on public.research_briefs
  for each row execute function public.set_updated_at();
create trigger set_drafts_updated_at before update on public.drafts
  for each row execute function public.set_updated_at();
create trigger set_writing_suggestions_updated_at before update on public.writing_suggestions
  for each row execute function public.set_updated_at();
