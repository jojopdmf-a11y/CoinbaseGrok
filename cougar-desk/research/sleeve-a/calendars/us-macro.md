# US macro calendar (A8)

- **Window:** 2024-01-11 (first IBIT regular session ~) through 2026-09-09 (last complete regular US session as of build)
- **Build date (UTC):** 2026-09-10T02:03:45Z
- **Dates scraped, not invented.** Each `source_url` points to a page that was fetched for this build (Wayback BLS schedules, FRED release calendars, or Federal Reserve FOMC calendars / statements). Local HTML dumps under `sources/`.
- **Sources used:**
  - BLS CPI schedule (Wayback): https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm (2024 dates); https://web.archive.org/web/20241231173152/https://www.bls.gov/schedule/news_release/cpi.htm (2025 planned, superseded by FRED actuals where revised)
  - BLS Employment Situation schedule (Wayback): https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm (2024); https://web.archive.org/web/20241231173152/https://www.bls.gov/schedule/news_release/empsit.htm (2025 planned)
  - FRED CPI calendar: https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 ; https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01
  - FRED Employment Situation calendar: https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 ; https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026
  - Federal Reserve FOMC calendars: https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm (policy statement URLs per row)
- **Notes:**
  - CPI / NFP `release_et` = 08:30 (BLS; FRED shows 7:30 CT = 08:30 ET). FOMC policy statement typically 14:00 ET on the decision day.
  - 2025 BLS lapse: October 2025 CPI and October 2025 Employment Situation were not published; September 2025 ES moved to 2025-11-20; November 2025 ES to 2025-12-16; September 2025 CPI to 2025-10-24; November 2025 CPI to 2025-12-18 (FRED Updated dates; see also https://www.bls.gov/bls/2025-lapse-revised-release-dates.htm).
  - Excluded: 2025-08-22 FOMC notation vote / longer-run goals statement (not a scheduled policy decision). Excluded ALFRED 2024-02-09 CPI phantom (no BLS all-items release that day; monthly CPI was 2024-02-13). Excluded 2024-08-21 CES preliminary benchmark (not NFP). Excluded 2024-01-05 NFP (before window start).
  - Events on/after 2026-09-11 (e.g. Sep 2026 CPI, Sep 2026 FOMC) are outside the window and omitted.

| date | event | release_et | source_url |
| --- | --- | --- | --- |
| 2024-01-11 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-01-31 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20240131a.htm |
| 2024-02-02 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-02-13 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-03-08 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-03-12 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-03-20 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20240320a.htm |
| 2024-04-05 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-04-10 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-05-01 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20240501a.htm |
| 2024-05-03 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-05-15 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-06-07 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-06-12 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-06-12 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20240612a.htm |
| 2024-07-05 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-07-11 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-07-31 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20240731a.htm |
| 2024-08-02 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-08-14 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-09-06 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-09-11 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-09-18 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20240918a.htm |
| 2024-10-04 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-10-10 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-11-01 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-11-07 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20241107a.htm |
| 2024-11-13 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-12-06 | NFP | 08:30 | https://web.archive.org/web/20240111113756/https://www.bls.gov/schedule/news_release/empsit.htm |
| 2024-12-11 | CPI | 08:30 | https://web.archive.org/web/20240104231820/https://www.bls.gov/schedule/news_release/cpi.htm |
| 2024-12-18 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20241218a.htm |
| 2025-01-10 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-01-15 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-01-29 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20250129a.htm |
| 2025-02-07 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-02-12 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-03-07 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-03-12 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-03-19 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20250319a.htm |
| 2025-04-04 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-04-10 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-05-02 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-05-07 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20250507a.htm |
| 2025-05-13 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-06-06 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-06-11 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-06-18 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20250618a.htm |
| 2025-07-03 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-07-15 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-07-30 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20250730a.htm |
| 2025-08-01 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-08-12 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-09-05 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-09-11 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-09-17 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20250917a.htm |
| 2025-10-24 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2025-10-29 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20251029a.htm |
| 2025-11-20 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-12-10 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20251210a.htm |
| 2025-12-16 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2025 |
| 2025-12-18 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&y=2025 |
| 2026-01-09 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-01-13 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-01-28 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm |
| 2026-02-11 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-02-13 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-03-06 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-03-11 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-03-18 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm |
| 2026-04-03 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-04-10 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-04-29 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm |
| 2026-05-08 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-05-12 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-06-05 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-06-10 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-06-17 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20260617a.htm |
| 2026-07-02 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-07-14 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-07-29 | FOMC | 14:00 | https://www.federalreserve.gov/newsevents/pressreleases/monetary20260729a.htm |
| 2026-08-07 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
| 2026-08-12 | CPI | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=10&ve=2026-09-09&view=year&vs=2026-01-01 |
| 2026-09-04 | NFP | 08:30 | https://fred.stlouisfed.org/releases/calendar?rid=50&y=2026 |
